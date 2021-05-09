import apiClient from '@/services'

export const getContacts = () => apiClient.get('/results')
export const postContact = params => apiClient.post('/results', params)
export const putContact = id => apiClient.put(`/results/${id}`)
export const deleteContact = id => apiClient.delete(`/results/${id}`)