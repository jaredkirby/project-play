import { InputWithButton } from '@/components/InputWithButton/InputWithButton';

export default function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        transform: 'translateY(-400px)',
      }}
    >
      <InputWithButton />
    </div>
  );
}
