import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import { API_URL } from '../.env'

export class ClinicService extends BaseService {
  static get entity () {
    return 'clinics'
  }

  static async create ({
    patientId,
    patientAgeAtTreatment,
    totalFreshEggsCollected,
    totalEmbryosCreated,
    hormoneResponse,
    causeOfEggDonorInfertility,
    microscope
  }) {
    try {
      const response = await this.request({ auth: true }, API_URL).post(`/${this.entity}/clinicaldata`,
        {
          patientId,
          patientAgeAtTreatment: parseInt(patientAgeAtTreatment),
          totalFreshEggsCollected: parseInt(totalFreshEggsCollected),
          totalEmbryosCreated: parseInt(totalEmbryosCreated),
          hormoneResponse: parseInt(hormoneResponse),
          causeOfEggDonorInfertility,
          microscope
        })
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }

  static async get (uuid) {
    try {
      const response = await this.request({ auth: true }, API_URL).get(`/${this.entity}/clinicaldata`,
        {
          params: {
            uuid
          }
        })
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }
}
