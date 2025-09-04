import { Container } from '@mui/material';
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {t('dashboard.page.title')}
    </Container>
  );
};

export default Dashboard;
