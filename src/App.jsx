import HeroSection from './components/HeroSection';
import LoginControls from './components/LoginControls';
import NavigationBar from './components/NavigationBar';
import NewsletterForm from './components/NewsletterForm';
import SearchBar from './components/SearchBar';
import StatsBar from './components/StatsBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <SearchBar />
      <LoginControls />
      <HeroSection />
      <NewsletterForm />
      <StatsBar />
    </div>
  );
}

export default App;
