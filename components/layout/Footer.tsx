import { Text } from '@mantine/core';

const Footer = () => {
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <Text size="sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </Text>
    </div>
  );
};
export default Footer;