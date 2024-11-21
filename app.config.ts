export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'cool',
    button: {
      default: {
        loadingIcon: 'i-octicon-sync-24',
      },
    },
    input: {
      default: {
        loadingIcon: 'i-octicon-sync-24',
      },
    },
    select: {
      default: {
        loadingIcon: 'i-octicon-sync-24',
        trailingIcon: 'i-octicon-chevron-down-24',
      },
    },
    selectMenu: {
      default: {
        selectedIcon: 'i-octicon-check-24',
      },
    },
    notification: {
      default: {
        position: 'top-0 bottom-[unset]',
        icon: 'i-octicon-check-circle-16',
        color:'primary',
        closeButton: {
          icon: 'i-heroicons-x-mark',
        },
      },
    },
    commandPalette: {
      default: {
        icon: 'i-octicon-search-24',
        loadingIcon: 'i-octicon-sync-24',
        selectedIcon: 'i-octicon-check-24',
        emptyState: {
          icon: 'i-octicon-search-24',
        },
      },
    },
    table: {
      default: {
        sortAscIcon: 'i-octicon-sort-asc-24',
        sortDescIcon: 'i-octicon-sort-desc-24',
        sortButton: {
          icon: 'i-octicon-arrow-switch-24',
        },
        loadingState: {
          icon: 'i-octicon-sync-24',
        },
        emptyState: {
          icon: 'i-octicon-database-24',
        },
      },
    },
    pagination: {
      default: {
        firstButton: {
          icon: 'i-octicon-chevron-left-24',
        },
        prevButton: {
          icon: 'i-octicon-arrow-left-24',
        },
        nextButton: {
          icon: 'i-octicon-arrow-right-24',
        },
        lastButton: {
          icon: 'i-octicon-chevron-right-24',
        },
      },
    },
    accordion: {
      default: {
        openIcon: 'i-octicon-chevron-down-24',
      },
    },
    breadcrumb: {
      default: {
        divider: 'i-octicon-chevron-right-24',
      },
    },
  },
})
