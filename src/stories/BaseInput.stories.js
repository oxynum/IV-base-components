import BaseInput from '../components/atoms/BaseInput.vue'

export default {
  title: 'ImVitro Components/BaseInput',
  component: BaseInput,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
  // }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<base-button />'
})
