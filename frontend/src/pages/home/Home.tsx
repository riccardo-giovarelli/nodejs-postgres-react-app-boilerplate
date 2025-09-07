import { Container } from '@mui/material';
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {t('home.page.title')}
    </Container>
  );
};

export default Home;
