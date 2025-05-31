import Card from '@/components/Card';
import Button from '@/components/Button';
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Button title="Get Started" size="large" shape="rounded-sm" className="mt-4" onClick={() => alert('Button Clicked!')} />
      <Button title="Learn More" size="medium" shape="rounded-lg" className="mt-2" onClick={() => alert('Learn More Clicked!')} />
      <Button title="Contact Us" size="small" shape="rounded-full" className="mt-2" onClick={() => alert('Contact Us Clicked!')} />
      <Button title="Sign Up" size="large" shape="rounded-md" className="mt-2" onClick={() => alert('Sign Up Clicked!')} /> 
    </div>
  )
}
export default Landing
