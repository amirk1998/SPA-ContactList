import http from './httpServices';

export function updateContact(id, data) {
  return http.put(`/contacts/${id}`, data);
}
