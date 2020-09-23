export default (req, res) => {
  switch (req.method) {
    case 'GET':
      res.send('success')
      break
    case 'POST':
      // Process a POST request
      // const { email, name } = req.body
      console.log(req)
      res.send('success')
      break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}