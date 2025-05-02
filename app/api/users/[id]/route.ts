// app/api/users/[id]/route.ts
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

// GET /api/users/[id] - Fetch a single user by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    // Find user by ID
    const user = users.find((u) => u._id === id);

    if (!user) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    // Return response
    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
