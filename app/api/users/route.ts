import { NextRequest, NextResponse } from 'next/server';

// Mock test data for users
const users = [
  {
    _id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Employee',
    status: 'Active',
    createdAt: '2025-01-01T10:00:00Z',
    referrals: 5,
    earnings: 500,
  },
  {
    _id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Influencer',
    status: 'Active',
    createdAt: '2025-02-15T12:30:00Z',
    referrals: 20,
    earnings: 1500,
  },
  {
    _id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'Job Seeker',
    status: 'Pending',
    createdAt: '2025-03-10T09:00:00Z',
    referrals: 0,
    earnings: 0,
  },
  {
    _id: '4',
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    role: 'Sales Team',
    status: 'Active',
    createdAt: '2025-04-01T14:20:00Z',
    referrals: 10,
    earnings: 800,
  },
  {
    _id: '5',
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    role: 'Employee',
    status: 'Banned',
    createdAt: '2025-04-20T16:00:00Z',
    referrals: 2,
    earnings: 100,
  },
];

// GET /api/users - Fetch all users with filtering, sorting, and pagination
export async function GET(req: NextRequest) {
  try {
    // Extract query parameters
    const { searchParams } = new URL(req.url);
    const role = searchParams.get('role') ?? '';
    const status = searchParams.get('status') ?? '';
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    // Filter users
    let filteredUsers = [...users];
    if (role) {
      filteredUsers = filteredUsers.filter((user) => user.role === role);
    }
    if (status) {
      filteredUsers = filteredUsers.filter((user) => user.status === status);
    }

    // Sort users
    filteredUsers.sort((a, b) => {
      const aValue = a[sortBy as keyof typeof a];
      const bValue = b[sortBy as keyof typeof b];
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });

    // Pagination
    const total = filteredUsers.length;
    const skip = (page - 1) * limit;
    const paginatedUsers = filteredUsers.slice(skip, skip + limit);

    // Return response
    return NextResponse.json(
      {
        success: true,
        data: paginatedUsers,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
