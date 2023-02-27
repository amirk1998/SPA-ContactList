import http from './httpServices';

export function deleteContact(contactID) {
  return http.delete(`/contacts/${contactID}`);
}
