export const useLoading = () => {
    const loading = ref<boolean>(false)
    const showLoading = () => {
        loading.value = true
    }
    const hideLoading = () => {
        loading.value = false
    }
    return {
        loading,
        showLoading,
        hideLoading
    }
}
