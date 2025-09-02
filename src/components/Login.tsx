// Login.tsx
'use client';

import { useEffect, useState } from 'react';

import BlurText from './custom/TextAnimations/BlurText/BlurText';
// ✅ Gunakan ConnectButton
import { ConnectButton } from '@particle-network/connectkit';
import PrismaticBurst from './custom/Backgrounds/PrismaticBurst/PrismaticBurst';
import ShinyText from './custom/TextAnimations/ShinyText/ShinyText';
import TextType from './custom/TextAnimations/TextType/TextType';
import { useAccount } from '@particle-network/connectkit';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [titleDone, setTitleDone] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  // ✅ Dapatkan address saat terhubung
  const account = useAccount();

  // Saat akun terhubung, lakukan login/register otomatis
  useEffect(() => {
    if (account?.address && !loading) {
      handleWeb3Login(account.address);
    }
  }, [account?.address]);

  const generateCredentials = (address: string) => {
    const cleanAddress = address.toLowerCase();
    const email = `${cleanAddress}@elysiumx.io`;
    const password = cleanAddress.split('').reverse().join('');
    return { username: cleanAddress, email, password };
  };

  const handleWeb3Login = async (address: string) => {
    // Hindari multiple calls
    if (loading) return;
    setLoading(true);
    setError('');
    const { email, password } = generateCredentials(address);

    try {

      // Coba login dulu
      await login(email, password);
      navigate('/dashboard');
    } catch (loginError: any) {
      // Hanya register jika error karena user tidak ditemukan (404)
      try {
        await register(email, password, address);
        // Setelah register, langsung login (token akan diset di `register`)
        // ini opsional, karena `register` mungkin sudah set user
        navigate('/dashboard');
      } catch (registerError: any) {
        await login(email, password);
        navigate('/dashboard');
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-900">
      {/* Background Animasi */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PrismaticBurst
          animationType="rotate"
          intensity={2}
          speed={0.5}
          distort={0}
          paused={false}
          rayCount={0}
          mixBlendMode="lighten"
          colors={['#e32fff', '#2d4af0', '#00bbff']}
        />
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-md z-10">
        {/* Logo & Judul */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-auto h-16 mb-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
            <img src="elysiumx-logo.png" alt="Check Icon" className="w-[100%] h-16" />
          </div>
          <h1 className="text-center">
            <BlurText
              text="Governance"
              delay={150}
              animateBy="letters"
              direction="top"
              onAnimationComplete={() => setTitleDone(true)}
              className="text-3xl font-bold text-white mb-2 tracking-tight justify-center"
            />
          </h1>
          {titleDone && (
            <p className="!text-white/70">
              <TextType
                text={['Connect your wallet to access governance']}
                typingSpeed={225}
                showCursor={true}
                cursorCharacter="●"
                className="text-sm font-medium"
              />
            </p>
          )}
        </div>

        {/* Form Card */}
        <div className="rounded-2xl p-8 shadow-2xl backdrop-blur-xl bg-slate-900/40 border border-white/10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-1">Get Started</h2>
            <p className="text-gray-400 text-sm">Sign in securely with your wallet</p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 p-4 rounded-xl border border-red-500/20 bg-red-500/10 backdrop-blur-sm flex items-start">
              <svg className="w-5 h-5 text-red-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-red-300 text-sm font-medium">{error}</span>
            </div>
          )}

          {/* ConnectButton dari Particle */}
          <div className="flex justify-center">
            <ConnectButton
              label="Connect Wallet"
              className="!w-full !py-3 !text-white !bg-white/10 !border !border-white/20 hover:!bg-white/20 hover:!border-white/30 !rounded-xl !font-semibold !transition-all !duration-200 disabled:opacity-60"
              {...({} as any)}
            />
          </div>

          {loading && (
            <div className="mt-4 text-center">
              <span className="flex items-center justify-center text-white/70 text-sm">
                <span className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mr-2"></span>
                Processing...
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <ShinyText
          text="© 2025 ElysiumX. Secure, transparent, and accountable governance platform."
          disabled={false}
          speed={3}
          className="text-center mt-8 text-white/50 text-sm font-medium"
        />
      </div>
    </div>
  );
};

export default Login;