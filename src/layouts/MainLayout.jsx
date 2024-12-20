import Header from '../components/Header.jsx';

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}