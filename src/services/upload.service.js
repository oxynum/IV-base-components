import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import { API_URL } from '../.env'
import { MICROSCOPES } from '../helpers/microscopeAnalyze'

export class UploadService extends BaseService {
  static get entity () {
    return 'upload'
  }

  /**
   * Due to generate the URL to be called -> Upload purpose
   * @param {*} file
   * @param {*} clinicaldatauuid
   */
  static async generateSignedURL (file, clinicaldatauuid) {
    try {
      const response = await this.request({ auth: true }).get(`${API_URL}/${this.entity}/presignedurl`,
        {
          params: {
            clinicaldatauuid,
            // TODO: Other params to register here
            fileextension: file.name.split('.').pop()
          }
        })
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  /**
   * Will analyze a video name by giving back an object that will contain video name and its ID.
   * @param {String} microscopeVideoName The microscope should be either a GERI, EMBRYOSCOPE, MIRI one.
   */
  static analyzeVideoName (microscopeVideoName) {
    const { GERI, MIRI, EMBRYOSCOPE } = MICROSCOPES
    const microscopeName = UploadService._checkVideoName(microscopeVideoName)
    let resultRegexp = null
    var completeAnalyze = {
      isValid: false,
      microscopeCode: null,
      videoName: null,
      videoId: null
    }

    switch (microscopeName) {
      case GERI.code:
        resultRegexp = GERI.recognition.exec(microscopeVideoName)

        completeAnalyze.isValid = true
        completeAnalyze.microscopeCode = GERI.code
        completeAnalyze.videoName = microscopeVideoName
        completeAnalyze.videoId = resultRegexp.length > 0 ? resultRegexp[1] : null
        break
      case MIRI.code:
        resultRegexp = MIRI.recognition.exec(microscopeVideoName)

        completeAnalyze.isValid = true
        completeAnalyze.microscopeCode = MIRI.code
        completeAnalyze.videoName = microscopeVideoName
        completeAnalyze.videoId = resultRegexp.length > 0 ? resultRegexp[1] : null
        break
      case EMBRYOSCOPE.code:
        resultRegexp = EMBRYOSCOPE.recognition.exec(microscopeVideoName)

        completeAnalyze.isValid = true
        completeAnalyze.microscopeCode = EMBRYOSCOPE.code
        completeAnalyze.videoName = microscopeVideoName
        completeAnalyze.videoId = resultRegexp.length > 0 ? resultRegexp[1] : null
        break
      default:
        break
    }

    completeAnalyze.videoId = completeAnalyze.videoId !== null
      ? Math.abs(parseInt(completeAnalyze.videoId))
      : completeAnalyze.videoId

    return completeAnalyze
  }

  static _checkVideoName (videoName) {
    let microscopeCode = null

    if (videoName.indexOf('MTL') > -1) {
      microscopeCode = MICROSCOPES.MIRI.code
    } else if (videoName.indexOf('_wells_') > -1) {
      microscopeCode = MICROSCOPES.EMBRYOSCOPE.code
    } else if (videoName.indexOf('_zid') > -1) {
      microscopeCode = MICROSCOPES.GERI.code
    }

    return microscopeCode
  }
}
