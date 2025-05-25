import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import ArtifactDetailPage from './pages/ArtifactDetailPage';
import KnowledgeVaultPage from './pages/KnowledgeVaultPage';
import ImpactDashboardPage from './pages/ImpactDashboardPage';
import ArtisanPage from './pages/ArtisanPage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/artisans" element={<ArtisanPage />} />
            <Route path="/marketplace/:id" element={<ArtifactDetailPage />} />
            <Route path="/knowledge" element={<KnowledgeVaultPage />} />
            <Route path="/impact" element={<ImpactDashboardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/knowledge/:id" element={<ArtifactDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;