import { Component, OnInit } from '@angular/core';

// Define an interface for the user object
interface User {
  id: string;
  name: string;
  department: string;
  model: string;
  year: number;
  vin: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Specify the type as an array of User interface
  users: User[] = [
    {
      name: 'Alice Johnson',
      id: 'AJ123',
      model: 'Tesla model 3',
      year: 2022,
      vin: '5YJ3E1E14KF372610',
      department: 'Finance',
    },
    {
      name: 'Bob Smith',
      id: 'BS456',
      model: 'Tesla model S',
      year: 2020,
      vin: '5YJSA1E18HF213971',
      department: 'HR',
    },
    {
      name: 'Manikanth Kodati',
      id: 'CB789',
      model: 'Tesla model Y',
      year: 2023,
      vin: '5YJSA1E14HF167860',
      department: 'IT',
    },
    {
      name: 'David Lee',
      id: 'DL101',
      model: 'Tesla model X',
      year: 2023,
      vin: '5YJXCDE25MF033715',
      department: 'Marketing',
    },
    {
      name: 'Emma Garcia',
      id: 'EG202',
      model: 'Tesla model 3',
      year: 2021,
      vin: '5YJ3E1EB4MF936389',
      department: 'Delivery',
    },
    {
      name: 'Frank Rodriguez',
      id: 'FR303',
      model: 'Tesla model Y',
      year: 2022,
      vin: '5YJSA1E14HF167860',
      department: 'Service',
    },
    {
      name: 'Grace Martinez',
      id: 'GM404',
      model: 'Tesla model S',
      year: 2023,
      vin: '5YJSA1E18HF213971',
      department: 'Manufacturing',
    },
    {
      name: 'Henry Nguyen',
      id: 'HN505',
      model: 'Tesla model X',
      year: 2020,
      vin: '5YJXCDE25MF033715',
      department: 'Finance',
    },
    {
      name: 'Isabella Kim',
      id: 'IK606',
      model: 'Tesla model 3',
      year: 2023,
      vin: '5YJ3E1EB4MF936389',
      department: 'HR',
    },
    {
      name: 'James Lee',
      id: 'JL707',
      model: 'Tesla model Y',
      year: 2021,
      vin: '5YJSA1E14HF167860',
      department: 'IT',
    },
    {
      name: 'Karen Smith',
      id: 'KS808',
      model: 'Tesla model S',
      year: 2022,
      vin: '5YJSA1E18HF213971',
      department: 'Marketing',
    },
    {
      name: 'Liam Johnson',
      id: 'LJ909',
      model: 'Tesla model X',
      year: 2020,
      vin: '5YJXCDE25MF033715',
      department: 'Delivery',
    },
    {
      name: 'Mia Brown',
      id: 'MB010',
      model: 'Tesla model 3',
      year: 2023,
      vin: '5YJ3E1EB4MF936389',
      department: 'Service',
    },
    {
      name: 'Noah Garcia',
      id: 'NG111',
      model: 'Tesla model Y',
      year: 2021,
      vin: '5YJSA1E14HF167860',
      department: 'Manufacturing',
    },
    {
      name: 'Olivia Nguyen',
      id: 'ON212',
      model: 'Tesla model S',
      year: 2022,
      vin: '5YJSA1E18HF213971',
      department: 'Finance',
    },
    {
      name: 'Peter Kim',
      id: 'PK313',
      model: 'Tesla model X',
      year: 2020,
      vin: '5YJXCDE25MF033715',
      department: 'HR',
    },
    {
      name: 'Quinn Smith',
      id: 'QS414',
      model: 'Tesla model 3',
      year: 2023,
      vin: '5YJ3E1EB4MF936389',
      department: 'IT',
    },
    {
      name: 'Rachel Johnson',
      id: 'RJ515',
      model: 'Tesla model Y',
      year: 2021,
      vin: '5YJSA1E14HF167860',
      department: 'Marketing',
    },
    {
      name: 'Sophia Brown',
      id: 'SB616',
      model: 'Tesla model S',
      year: 2022,
      vin: '5YJSA1E18HF213971',
      department: 'Delivery',
    },
    {
      name: 'Tyler Garcia',
      id: 'TG717',
      model: 'Tesla model X',
      year: 2020,
      vin: '5YJXCDE25MF033715',
      department: 'Service',
    },
    {
      name: 'Uma Nguyen',
      id: 'UN818',
      model: 'Tesla model 3',
      year: 2023,
      vin: '5YJ3E1EB4MF936389',
      department: 'Manufacturing',
    },
    {
      name: 'Victor Kim',
      id: 'VK919',
      model: 'Tesla model Y',
      year: 2021,
      vin: '5YJSA1E14HF167860',
      department: 'Finance',
    },
    {
      name: 'Wendy Smith',
      id: 'WS020',
      model: 'Tesla model S',
      year: 2022,
      vin: '5YJSA1E18HF213971',
      department: 'HR',
    },
    {
      name: 'Xavier Brown',
      id: 'XB121',
      model: 'Tesla model X',
      year: 2020,
      vin: '5YJXCDE25MF033715',
      department: 'IT',
    },
    {
      name: 'Yara Garcia',
      id: 'YG222',
      model: 'Tesla model 3',
      year: 2023,
      vin: '5YJ3E1EB4MF936389',
      department: 'Marketing',
    },
    {
      name: 'Zachary Johnson',
      id: 'ZJ323',
      model: 'Tesla model Y',
      year: 2021,
      vin: '5YJSA1E14HF167860',
      department: 'Delivery',
    },
    {
      name: 'Aaron Martinez',
      id: 'AM424',
      model: 'Tesla model S',
      year: 2022,
      vin: '5YJSA1E18HF213971',
      department: 'Service',
    },
    {
      name: 'Bella Nguyen',
      id: 'BN525',
      model: 'Tesla model X',
      year: 2020,
      vin: '5YJXCDE25MF033715',
      department: 'Manufacturing',
    },
    {
      name: 'Caleb Kim',
      id: 'CK626',
      model: 'Tesla model 3',
      year: 2023,
      vin: '5YJ3E1EB4MF936389',
      department: 'Finance',
    },
    {
      name: 'Daniella Smith',
      id: 'DS727',
      model: 'Tesla model Y',
      year: 2021,
      vin: '5YJSA1E14HF167860',
      department: 'HR',
    },
    {
      name: 'Ethan Brown',
      id: 'EB828',
      model: 'Tesla model S',
      year: 2022,
      vin: '5YJSA1E18HF213971',
      department: 'IT',
    },
    {
      name: 'Fiona Garcia',
      id: 'FG929',
      model: 'Tesla model X',
      year: 2020,
      vin: '5YJXCDE25MF033715',
      department: 'Marketing',
    },
    {
      name: 'Gabriel Johnson',
      id: 'GJ030',
      model: 'Tesla model 3',
      year: 2023,
      vin: '5YJ3E1EB4MF936389',
      department: 'Delivery',
    },
    {
      name: 'Hannah Nguyen',
      id: 'HN131',
      model: 'Tesla model Y',
      year: 2021,
      vin: '5YJSA1E14HF167860',
      department: 'Service',
    },
    {
      name: 'Ian Martinez',
      id: 'IM232',
      model: 'Tesla model S',
      year: 2022,
      vin: '5YJSA1E18HF213971',
      department: 'Manufacturing',
    },
    {
      name: 'Julia Kim',
      id: 'JK333',
      model: 'Tesla model X',
      year: 2020,
      vin: '5YJXCDE25MF033715',
      department: 'Finance',
    },
    {
      name: 'Kevin Smith',
      id: 'KS434',
      model: 'Tesla model 3',
      year: 2023,
      vin: '5YJ3E1EB4MF936389',
      department: 'HR',
    },
  ];

  departments: string[] = [
    'Finance',
    'HR',
    'Manufacturing',
    'Service',
    'Delivery',
  ];

  filteredUsers: User[] = this.users.slice(); // Populate with all users initially

  filteredDepartments: string[] = this.departments.slice(); // Populate with all departments initially

  ngOnInit(): void {}

  filterUsers(event: Event): void {
    const target = event.target as HTMLInputElement;
    const keyword = target.value.toLowerCase();
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(keyword)
    );
  }

  filterDepartments(event: Event): void {
    const target = event.target as HTMLInputElement;
    const keyword = target.value.toLowerCase();
    this.filteredDepartments = this.departments.filter((department) =>
      department.toLowerCase().includes(keyword)
    );
  }

  usersFilteredByDepartment(department: string): User[] {
    return this.filteredUsers.filter((user) => user.department === department);
  }
}
