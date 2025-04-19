import React, { useState, useEffect } from 'react';
import StatsCards from '../components/StatsCards';
import VulnerabilitiesTable from '../components/VulnerabilitiesTable';
// import { LineChart, Line } from 'recharts';


const StatsDashboard = () => {
  const [stats, setStats] = useState({
    ec2Instances: null,
    securityGroups: null,
    awsAccounts: null,
    vulnerabilities: null,
  });
  const [vulnerabilities, setVulnerabilities] = useState([]);
  

  useEffect(() => {
    // Simulate fetching data with a timeout
    setTimeout(() => {
      // Fake data for illustration
      setStats({
        ec2Instances: 12,
        securityGroups: 8,
        awsAccounts: 3,
        vulnerabilities: 4,
      });

      const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];


      // Simulate vulnerabilities
      setVulnerabilities([
        {
          id: 1,
          instanceId: 'i-1234567890abcdef0',
          securityGroup: 'sg-12345678',
          description: 'Open port 22 to the world (Allows unrestricted SSH access).',
          riskLevel: 'High',
          cve: 'CVE-2023-53489',
          recommendation: 'Restrict SSH access to known IPs using security group rules.'
        },
        {
          id: 13,
          instanceId: 'i-765432109abcdef2',
          securityGroup: 'sg-76543210',
          description: 'Nginx misconfiguration allows directory listing.',
          riskLevel: 'Medium',
          cve: 'N/A',
          recommendation: 'Disable directory listing in Nginx configuration.'
        },
        {
          id: 2,
          instanceId: 'i-234567890abcdef1',
          securityGroup: 'sg-23456789',
          description: 'Outdated Apache Server (CVE-2021-41773 - Path Traversal).',
          riskLevel: 'Critical',
          cve: 'CVE-2021-41773',
          recommendation: 'Upgrade Apache to version 2.4.51 or later.'
        },
        {
          id: 3,
          instanceId: 'i-345678901abcdef2',
          securityGroup: 'sg-34567890',
          description: 'Weak database credentials found (MySQL root user has no password).',
          riskLevel: 'High',
          cve: 'CVE-2025-21359',
          recommendation: 'Set a strong password for MySQL root user and disable remote root access.'
        },
        {
          id: 8,
          instanceId: 'i-890123456abcdef7',
          securityGroup: 'sg-89012345',
          description: 'EC2 instance metadata service still allows v1 access (Potential SSRF risk).',
          riskLevel: 'Low',
          cve: 'CVE-2023-61223',
          recommendation: 'Enforce IMDSv2 to reduce SSRF attack risk.'
        },
        {
          id: 10,
          instanceId: 'i-012345678abcdef9',
          securityGroup: 'sg-01234567',
          description: 'Deprecated PHP version detected (PHP 5.6 - End of Life).',
          riskLevel: 'Medium',
          cve: 'N/A',
          recommendation: 'Upgrade PHP to at least version 7.4 or later.'
        },
        {
          id: 9,
          instanceId: 'i-901234567abcdef8',
          securityGroup: 'sg-90123456',
          description: 'Server timezone set to UTC+0 instead of local timezone.',
          riskLevel: 'Low',
          cve: 'CVE-2025-21359',
          recommendation: 'Set the correct timezone for logging consistency.'
        },
        {
          id: 4,
          instanceId: 'i-456789012abcdef3',
          securityGroup: 'sg-45678901',
          description: 'TLS 1.0 enabled - Weak encryption protocol detected.',
          riskLevel: 'Medium',
          cve: 'N/A',
          recommendation: 'Disable TLS 1.0 and enforce TLS 1.2 or later.'
        },
        {
          id: 5,
          instanceId: 'i-567890123abcdef4',
          securityGroup: 'sg-56789012',
          description: 'S3 bucket misconfiguration - Public read access detected.',
          riskLevel: 'Critical',
          cve: 'N/A',
          recommendation: 'Restrict public access to S3 bucket using bucket policies and IAM roles.'
        },
        {
          id: 6,
          instanceId: 'i-678901234abcdef5',
          securityGroup: 'sg-67890123',
          description: 'Unpatched OpenSSL version (CVE-2022-0778 - Infinite Loop Vulnerability).',
          riskLevel: 'High',
          cve: 'CVE-2022-0778',
          recommendation: 'Upgrade OpenSSL to version 1.1.1n or later.'
        },
        {
          id: 7,
          instanceId: 'i-789012345abcdef6',
          securityGroup: 'sg-78901234',
          description: 'Docker API exposed on port 2375 without authentication.',
          riskLevel: 'Critical',
          cve: 'CVE-2025-21359',
          recommendation: 'Disable Docker API remote access or enforce authentication and firewall rules.'
        },
        {
          id: 12,
          instanceId: 'i-876543210abcdef1',
          securityGroup: 'sg-87654321',
          description: 'HTTP headers missing `X-Content-Type-Options: nosniff`.',
          riskLevel: 'Low',
          cve: 'N/A',
          recommendation: 'Add the header to prevent MIME type sniffing attacks.'
        },
        {
          id: 13,
          instanceId: 'i-765432109abcdef2',
          securityGroup: 'sg-76543210',
          description: 'Insecure server signature reveals software version in HTTP response.',
          riskLevel: 'Low',
          cve: 'CVE-2025-21359',
          recommendation: 'Disable server signatures to prevent information disclosure.'
        },
        {
          id: 8,
          instanceId: 'i-890123456abcdef7',
          securityGroup: 'sg-89012345',
          description: 'IAM user with full administrative privileges and no MFA enabled.',
          riskLevel: 'High',
          cve: 'N/A',
          recommendation: 'Enforce MFA on IAM accounts with admin access.'
        },
        {
          id: 9,
          instanceId: 'i-901234567abcdef8',
          securityGroup: 'sg-90123456',
          description: 'Redis server exposed on the internet without authentication.',
          riskLevel: 'Critical',
          cve: 'N/A',
          recommendation: 'Restrict Redis access to private subnets and enable authentication.'
        },
        {
          id: 10,
          instanceId: 'i-012345678abcdef9',
          securityGroup: 'sg-01234567',
          description: 'Deprecated PHP version detected (PHP 5.6 - End of Life).',
          riskLevel: 'Medium',
          cve: 'CVE-2025-21359',
          recommendation: 'Upgrade PHP to at least version 7.4 or later.'
        },
        {
          id: 11,
          instanceId: 'i-987654321abcdef0',
          securityGroup: 'sg-98765432',
          description: 'Unauthorized EC2 metadata service access detected (IMDSv1).',
          riskLevel: 'High',
          cve: 'N/A',
          recommendation: 'Enforce IMDSv2 to prevent SSRF-based attacks.'
        },
        {
          id: 12,
          instanceId: 'i-876543210abcdef1',
          securityGroup: 'sg-87654321',
          description: 'Potential log4j vulnerability (CVE-2021-44228 - Log4Shell).',
          riskLevel: 'Critical',
          cve: 'CVE-2021-44228',
          recommendation: 'Upgrade Log4j to version 2.16.0 or later.'
        },
        {
          id: 13,
          instanceId: 'i-765432109abcdef2',
          securityGroup: 'sg-76543210',
          description: 'Nginx misconfiguration allows directory listing.',
          riskLevel: 'Medium',
          cve: 'N/A',
          recommendation: 'Disable directory listing in Nginx configuration.'
        },
        {
          id: 14,
          instanceId: 'i-654321098abcdef3',
          securityGroup: 'sg-65432109',
          description: 'SMTP server allows open relay (Spam risk).',
          riskLevel: 'High',
          cve: 'CVE-2021-44228',
          recommendation: 'Restrict SMTP relay access to trusted sources only.'
        },
        {
          id: 15,
          instanceId: 'i-543210987abcdef4',
          securityGroup: 'sg-54321098',
          description: 'AWS Lambda function has excessive permissions (AdministratorAccess).',
          riskLevel: 'High',
          cve: 'N/A',
          recommendation: 'Follow the principle of least privilege (PoLP) and restrict Lambda permissions.'
        }
      ]);
      
      
    }, 1000);
  }, []);

  return (
    <div className="font-worksans">
      <h1 className="text-4xl font-bold mb-16 text-center text-white">Cloud Security Dashboard</h1>

      {/* Stats Cards */}
      <StatsCards stats={stats} />
{/* 
      <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart> */}

      {/* Vulnerabilities Table */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Vulnerabilities</h2>
        <VulnerabilitiesTable vulnerabilities={vulnerabilities} />
        
      </div>
    </div>
  );
};

export default StatsDashboard;
