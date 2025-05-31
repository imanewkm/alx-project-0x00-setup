import Card from '@/components/Card';
import Button from '@/components/Button';
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Button title="Get Started" size="large" shape="rounded-full" className="mt-4" onClick={() => alert('Button Clicked!')} />
    </div>
  )
}
export default Landing
