import apiClient from '@/services'

export const getContacts = () => apiClient.get('/results')
export const postContact = params => apiClient.post('/results', params)
export const putContact = (contact) => apiClient.put(`/results/${contact.id}`, contact)
export const destroyContact = id => apiClient.delete(`/results/${id}`)