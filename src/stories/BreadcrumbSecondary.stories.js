import BreadcrumbSecondary from '../components/BreadcrumbSecondary.vue'

export default {
  title: 'Example/BreadcrumbSecondary',
  component: BreadcrumbSecondary,
  tags: ['autodocs'],
  argTypes: {

  }
}

export const Primary = {
  args: {
    items: [{title:'Home', url:'#'},{title:'Child', url:'#'},{title:'Current', url:'#'}]
  },
}
