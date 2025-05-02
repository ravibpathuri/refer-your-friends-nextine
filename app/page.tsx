import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

const HomePage = async () => {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
};

export default HomePage;
