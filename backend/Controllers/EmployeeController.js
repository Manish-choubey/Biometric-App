app.get('/api/employee-details', async (req, res) => {
  const employeeDetails = await EmployeeDetails.find({});
  res.json(employeeDetails);
});

app.post('/api/employee-details', async (req, res) => {
  const employeeDetails = new EmployeeDetails(req.body);
  await employeeDetails.save();
  res.json(employeeDetails);
});

app.put('/api/employee-details/:id', async (req, res) => {
  const { id } = req.params;
  const employeeDetails = await EmployeeDetails.findByIdAndUpdate(id, req.body);
  res.json(employeeDetails);
});

app.delete('/api/employee-details/:id', async (req, res) => {
  const { id } = req.params;
  await EmployeeDetails.findByIdAndDelete(id);
  res.json({ message: 'Employee details deleted successfully' });
});

// Define API routes for employee time punches
app.get('/api/time-punches', async (req, res) => {
  const timePunches = await TimePunch.find({});
  res.json(timePunches);
});

app.post('/api/time-punches', async (req, res) => {
  const timePunch = new TimePunch(req.body);
  await timePunch.save();
  res.json(timePunch);
});

app.put('/api/time-punches/:id', async (req, res) => {
  const { id } = req.params;
  const timePunch = await TimePunch.findByIdAndUpdate(id, req.body);
  res.json(timePunch);
});

app.delete('/api/time-punches/:id', async (req, res) => {
  const { id } = req.params;
  await TimePunch.findByIdAndDelete(id);
  res.json({ message: 'Time punch deleted successfully' });
});
