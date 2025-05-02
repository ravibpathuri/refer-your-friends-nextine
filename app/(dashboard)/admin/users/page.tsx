const AdminUsersPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // Replace with your actual base URL

  const response = await fetch(`${baseUrl}/api/users`); // Replace with your actual API endpoint
  const data = await response.json();

  console.log('User Data:', data); // Log the user data to the console
  return (
    <div>
      Admin Users Management
      <div className="user-data">
        <h2>User Data</h2>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default AdminUsersPage;
