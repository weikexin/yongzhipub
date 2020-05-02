<template>
  <CBreadcrumb v-bind="props">
    <slot></slot>
  </CBreadcrumb>
</template>

<script>
export default {
  name: 'WBreadcrumb',
  props: {
    addClasses: [String, Array, Object],
    addLinkClasses: [String, Array, Object],
    addLastItemClasses: [String, Array, Object]
  },
  computed: {
    items () {
      const routes = this.$route.matched.filter(route => {
        return route.name || (route.meta && route.meta.label)
      })
      console.log(routes);
      return routes.map(route => {
        const meta =  route.meta || {}
        let dynCaption = meta.label || route.name
        let endEndClasses = ''
        if (route.params) {
          dynCaption = route.params.meta.label
          endEndClasses = 'text-success'
        }
        return {
          to: route,
          text: dynCaption,
          addClasses: endEndClasses
        }
      })
    },
    props () {
      return {
        items: this.items,
        addClasses: this.addClasses,
        addLinkClasses: this.addLinkClasses,
        addLastItemClasses: 'text-success'
      }
    }
  }
}
</script>
