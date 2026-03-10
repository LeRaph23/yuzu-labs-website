import Image from 'next/image';

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function PhoneMockup({ src, alt, className = '', priority = false }: PhoneMockupProps) {
  return (
    <div className={`phone-mockup ${className}`}>
      <div className="phone-mockup-inner">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-[32px]"
          priority={priority}
          sizes="(max-width: 640px) 200px, (max-width: 1024px) 250px, 280px"
        />
      </div>
    </div>
  );
}
