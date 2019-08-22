export default (self, body) => {
  if (self.getAuthLevel <= 2) {
    throw new Error('Unauthorized, need permission')
  }

  // Authenticated request
  const authenticationId = self.session.auth.token.my_id
  const accessToken = self.session.auth.token.my_id

  return self.ecomClient

    .passport({
      url: `api/customers.json`,
      authenticationId,
      accessToken,
      method: 'POST',
      data: body
    })
}
