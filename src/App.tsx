import React from 'react';
import { Puck } from '@measured/puck';
import { DropZone } from '@measured/puck';
import '@measured/puck/puck.css';

// Type definitions for component props
interface HeadingProps {
  text: string;
  level?: 1 | 2 | 3 | 4;
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  background?: string;
  lineHeight?: string | number;
}

interface TextProps {
  text: string;
  size?: string;
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  margin?: string;
  padding?: string;
  lineHeight?: string | number;
}

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

interface CardProps {
  title: string;
  description: string;
  backgroundColor?: string;
}

interface ListProps {
  items: string;
  type?: 'ul' | 'ol';
}

interface DividerProps {
  color?: string;
  thickness?: string;
}

interface SpacerProps {
  height?: string;
}

interface ContainerProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  padding?: string;
  layout?: 'vertical' | 'horizontal' | 'grid' | 'centered';
  gap?: string;
}

interface FlexContainerProps {
  children?: React.ReactNode;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
  gap?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

interface GridContainerProps {
  children?: React.ReactNode;
  columns?: number;
  gap?: string;
  rowGap?: string;
}

interface SimpleContainerProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  padding?: string;
}

interface PositionedElementProps {
  children?: React.ReactNode;
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: string;
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundColor?: string;
  textColor?: string;
  backgroundImage?: string;
  height?: string;
  alignment?: 'left' | 'center' | 'right';
}

interface SliderProps {
  slides: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  showDots?: boolean;
  showArrows?: boolean;
  height?: string;
  backgroundColor?: string;
}

interface ExpanderProps {
  title: string;
  initiallyExpanded?: boolean;
}

interface ImageTextSplitProps {
  text: string;
  imageSrc: string;
  alt?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textColor?: string;
  imageWidth?: string;
}

interface SponsorProps {
  sponsors: string;
  backgroundColor?: string;
}

interface LocationProps {
  address: string;
  mapUrl?: string;
  backgroundColor?: string;
}

interface DatesProps {
  dateList: string;
  backgroundColor?: string;
}

interface ContactUsProps {
  email: string;
  phone: string;
  messagePlaceholder?: string;
  backgroundColor?: string;
}

interface FilterSearchProps {
  placeholder?: string;
  backgroundColor?: string;
}

interface ProgramListProps {
  programs: string;
  backgroundColor?: string;
}

// Component implementations
const Heading = ({ text, level = 1, color = '#333', align = 'left', background = 'transparent', lineHeight = '1.6' }: HeadingProps) => {
  const headingStyle: React.CSSProperties = {
    margin: '16px 0',
    color,
    fontWeight: 'bold',
    textAlign: align,
    backgroundColor: background,
    lineHeight,
  };
  switch (level) {
    case 1: return <h1 style={headingStyle}>{text}</h1>;
    case 2: return <h2 style={headingStyle}>{text}</h2>;
    case 3: return <h3 style={headingStyle}>{text}</h3>;
    case 4: return <h4 style={headingStyle}>{text}</h4>;
    default: return <h1 style={headingStyle}>{text}</h1>;
  }
};

const Text = ({ text, size = '16px', color = '#555', align = 'left', margin = '12px 0', padding = '0', lineHeight = '1.6' }: TextProps) => {
  return (
    <p style={{ margin, lineHeight, color, fontSize: size, textAlign: align, padding }}>
      {text}
    </p>
  );
};

const Button = ({ text, variant = 'primary', size = 'medium' }: ButtonProps) => {
  const sizeStyles: Record<string, React.CSSProperties> = {
    small: { padding: '8px 16px', fontSize: '14px' },
    medium: { padding: '12px 24px', fontSize: '16px' },
    large: { padding: '16px 32px', fontSize: '18px' },
  };
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: { backgroundColor: '#007bff', color: 'white' },
    secondary: { backgroundColor: '#6c757d', color: 'white' },
    success: { backgroundColor: '#28a745', color: 'white' },
    danger: { backgroundColor: '#dc3545', color: 'white' },
  };
  return (
    <button
      style={{
        ...sizeStyles[size],
        ...variantStyles[variant],
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '8px 0',
      }}
    >
      {text}
    </button>
  );
};

const Card = ({ title, description, backgroundColor = '#fff' }: CardProps) => {
  return (
    <div style={{
      backgroundColor,
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '16px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>{title}</h3>
      <p style={{ margin: '0', color: '#666', lineHeight: '1.5' }}>{description}</p>
    </div>
  );
};

const List = ({ items, type = 'ul' }: ListProps) => {
  const listItems = items.split('\n').filter(item => item.trim());
  if (type === 'ol') {
    return (
      <ol style={{ margin: '16px 0', paddingLeft: '20px' }}>
        {listItems.map((item, index) => (
          <li key={index} style={{ margin: '8px 0', color: '#555' }}>{item.trim()}</li>
        ))}
      </ol>
    );
  }
  return (
    <ul style={{ margin: '16px 0', paddingLeft: '20px' }}>
      {listItems.map((item, index) => (
        <li key={index} style={{ margin: '8px 0', color: '#555' }}>{item.trim()}</li>
      ))}
    </ul>
  );
};

const Divider = ({ color = '#ddd', thickness = '1px' }: DividerProps) => {
  return (
    <hr style={{ border: 'none', borderTop: `${thickness} solid ${color}`, margin: '24px 0' }} />
  );
};

const Spacer = ({ height = '20px' }: SpacerProps) => {
  return <div style={{ height, width: '100%' }} />;
};

const Container = ({ children, backgroundColor = 'transparent', padding = '20px', layout = 'vertical', gap = '16px' }: ContainerProps) => {
  const layoutStyles: Record<string, React.CSSProperties> = {
    vertical: { display: 'flex', flexDirection: 'column', gap },
    horizontal: { display: 'flex', flexDirection: 'row', gap, alignItems: 'center' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap },
    centered: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap },
  };
  return (
    <div style={{
      backgroundColor,
      padding,
      margin: '16px 0',
      borderRadius: '8px',
      border: backgroundColor === 'transparent' ? '1px dashed #ccc' : 'none',
      ...layoutStyles[layout],
    }}>
      {children}
    </div>
  );
};

const FlexContainer = ({ children, direction = 'row', justify = 'flex-start', align = 'stretch', gap = '16px', wrap = 'nowrap' }: FlexContainerProps) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: direction,
      justifyContent: justify,
      alignItems: align,
      gap,
      flexWrap: wrap,
      padding: '16px',
      margin: '16px 0',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      border: '1px solid #e9ecef',
    }}>
      {children}
    </div>
  );
};

const GridContainer = ({ children, columns = 2, gap = '16px', rowGap = '16px' }: GridContainerProps) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap,
      rowGap,
      padding: '16px',
      margin: '16px 0',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      border: '1px solid #e9ecef',
      minHeight: '100px',
    }}>
      <DropZone zone="children" />
    </div>
  );
};

const SimpleContainer = ({ children, backgroundColor = '#f0f8ff', padding = '20px' }: SimpleContainerProps) => {
  return (
    <div style={{
      backgroundColor,
      padding,
      margin: '16px 0',
      borderRadius: '8px',
      border: '2px dashed #007bff',
      minHeight: '100px',
    }}>
      {children}
    </div>
  );
};

const PositionedElement = ({ children, position = 'static', top = 'auto', left = 'auto', right = 'auto', bottom = 'auto', zIndex = 'auto' }: PositionedElementProps) => {
  return (
    <div style={{ position, top, left, right, bottom, zIndex, margin: '16px 0' }}>
      {children}
    </div>
  );
};

const HeroSection = ({
  title,
  subtitle = '',
  buttonText = 'Learn More',
  buttonLink = '#',
  backgroundColor = '#007bff',
  textColor = 'white',
  backgroundImage = '',
  height = '400px',
  alignment = 'center',
}: HeroSectionProps) => {
  const heroStyle: React.CSSProperties = {
    background: backgroundImage ? `url(${backgroundImage})` : backgroundColor,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: textColor,
    height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: alignment === 'left' ? 'flex-start' : alignment === 'right' ? 'flex-end' : 'center',
    padding: '60px 20px',
    margin: '16px 0',
    borderRadius: '8px',
    position: 'relative',
  };
  const contentStyle: React.CSSProperties = {
    textAlign: alignment,
    maxWidth: '600px',
    zIndex: 2,
    position: 'relative',
  };
  const buttonStyle: React.CSSProperties = {
    backgroundColor: textColor === 'white' ? 'white' : '#007bff',
    color: textColor === 'white' ? '#007bff' : 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '20px',
    textDecoration: 'none',
    display: 'inline-block',
  };
  return (
    <div style={heroStyle}>
      <div style={contentStyle}>
        <h1 style={{ margin: '0 0 16px 0', fontSize: '3rem', fontWeight: 'bold' }}>{title}</h1>
        {subtitle && <p style={{ margin: '0 0 20px 0', fontSize: '1.2rem', opacity: 0.9 }}>{subtitle}</p>}
        {buttonText && <a href={buttonLink} style={buttonStyle}>{buttonText}</a>}
      </div>
    </div>
  );
};

const Slider = ({
  slides,
  autoplay = true,
  autoplaySpeed = 3000,
  showDots = true,
  showArrows = true,
  height = '400px',
  backgroundColor = '#f8f9fa',
}: SliderProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slideList = slides.split('\n').filter(slide => slide.trim());
  React.useEffect(() => {
    if (autoplay && slideList.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideList.length);
      }, autoplaySpeed);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplaySpeed, slideList.length]);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideList.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slideList.length) % slideList.length);
  const goToSlide = (index: number) => setCurrentSlide(index);
  const sliderStyle: React.CSSProperties = {
    position: 'relative',
    height,
    backgroundColor,
    margin: '16px 0',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const slideStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    background: `linear-gradient(135deg, ${backgroundColor} 0%, #e9ecef 100%)`,
  };
  const arrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  };
  const dotsStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    zIndex: 2,
  };
  const dotStyle: React.CSSProperties = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };
  const activeDotStyle: React.CSSProperties = { ...dotStyle, backgroundColor: 'white' };
  if (slideList.length === 0) {
    return (
      <div style={sliderStyle}>
        <div style={slideStyle}>Add slide content (one per line)</div>
      </div>
    );
  }
  return (
    <div style={sliderStyle}>
      <div style={slideStyle}>{slideList[currentSlide] || 'No slides available'}</div>
      {showArrows && slideList.length > 1 && (
        <>
          <button style={{ ...arrowStyle, left: '20px' }} onClick={prevSlide}>‹</button>
          <button style={{ ...arrowStyle, right: '20px' }} onClick={nextSlide}>›</button>
        </>
      )}
      {showDots && slideList.length > 1 && (
        <div style={dotsStyle}>
          {slideList.map((_, index) => (
            <button
              key={index}
              style={index === currentSlide ? activeDotStyle : dotStyle}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Expander = ({ title, initiallyExpanded = false }: ExpanderProps) => {
  const [expanded, setExpanded] = React.useState(initiallyExpanded);
  const toggleExpanded = () => setExpanded(!expanded);
  return (
    <div style={{ margin: '16px 0', border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
      <button
        onClick={toggleExpanded}
        style={{
          width: '100%',
          padding: '12px 16px',
          backgroundColor: '#f5f5f5',
          border: 'none',
          textAlign: 'left',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {title}
        <span>{expanded ? '▼' : '▶'}</span>
      </button>
      <div style={{ padding: expanded ? '16px' : '0', height: expanded ? 'auto' : '0', overflow: 'hidden', transition: 'height 0.3s ease' }}>
        <DropZone zone="expander-content" />
      </div>
    </div>
  );
};

const ImageTextSplit = ({ text, imageSrc, alt = 'Image', textAlign = 'left', textColor = '#333', imageWidth = '50%' }: ImageTextSplitProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ flex: 1, padding: '20px', textAlign: textAlign, color: textColor }}>
        <p>{text}</p>
      </div>
      <img src={imageSrc} alt={alt} style={{ width: imageWidth, height: 'auto', objectFit: 'cover' }} />
    </div>
  );
};

const Sponsor = ({ sponsors, backgroundColor = '#f8f9fa' }: SponsorProps) => {
  const sponsorList = sponsors.split('\n').filter(sponsor => sponsor.trim());
  return (
    <div style={{ backgroundColor, padding: '20px', margin: '16px 0', borderRadius: '8px', border: '1px solid #e9ecef' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Sponsors</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {sponsorList.map((sponsor, index) => (
          <div key={index} style={{ padding: '10px', backgroundColor: '#fff', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            {sponsor}
          </div>
        ))}
      </div>
    </div>
  );
};

const Location = ({ address, mapUrl = 'https://via.placeholder.com/400x200', backgroundColor = '#f8f9fa' }: LocationProps) => {
  return (
    <div style={{ backgroundColor, padding: '20px', margin: '16px 0', borderRadius: '8px', border: '1px solid #e9ecef' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Location</h3>
      <p style={{ margin: '0 0 16px 0', color: '#666' }}>{address}</p>
      <img src={mapUrl} alt="Location Map" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
    </div>
  );
};

const Dates = ({ dateList, backgroundColor = '#f8f9fa' }: DatesProps) => {
  const dates = dateList.split('\n').filter(date => date.trim());
  return (
    <div style={{ backgroundColor, padding: '20px', margin: '16px 0', borderRadius: '8px', border: '1px solid #e9ecef' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Dates</h3>
      <ul style={{ margin: '0', paddingLeft: '20px', color: '#666' }}>
        {dates.map((date, index) => (
          <li key={index} style={{ margin: '8px 0' }}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

const ContactUs = ({ email, phone, messagePlaceholder = 'Your message here...', backgroundColor = '#f8f9fa' }: ContactUsProps) => {
  return (
    <div style={{ backgroundColor, padding: '20px', margin: '16px 0', borderRadius: '8px', border: '1px solid #e9ecef' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Contact Us</h3>
      <p style={{ margin: '0 0 12px 0', color: '#666' }}>Email: <a href={`mailto:${email}`} style={{ color: '#007bff' }}>{email}</a></p>
      <p style={{ margin: '0 0 12px 0', color: '#666' }}>Phone: {phone}</p>
      <textarea
        placeholder={messagePlaceholder}
        style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', resize: 'vertical' }}
      />
    </div>
  );
};

const FilterSearch = ({ placeholder = 'Search programs...', backgroundColor = '#f8f9fa' }: FilterSearchProps) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  return (
    <div style={{ backgroundColor, padding: '20px', margin: '16px 0', borderRadius: '8px', border: '1px solid #e9ecef' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Filter & Search</h3>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ddd',
          fontSize: '16px',
        }}
      />
    </div>
  );
};

const ProgramList = ({ programs, backgroundColor = '#e8ebeeff' }: ProgramListProps) => {
  const programItems = programs.split('\n\n').filter(item => item.trim()).map(item => {
    const [title, ...rest] = item.split('\n');
    const description = rest.join('\n');
    return { title, description };
  });
  return (
    <div style={{ backgroundColor, padding: '20px', margin: '16px 0', borderRadius: '8px', border: '1px solid #e9ecef' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#e8ebeeff' }}>Schedules</h3>
      {programItems.map((program, index) => (
        <div key={index} style={{
          backgroundColor: '#fff',
          padding: '15px',
          marginBottom: '16px',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>{program.title}</h4>
          <p style={{ margin: '0', color: '#666', lineHeight: '1.5' }}>{program.description}</p>
        </div>
      ))}
    </div>
  );
};

// Enhanced config with multiple components
const config = {
  components: {
    Heading: {
      fields: {
        text: { type: 'text' as const },
        level: {
          type: 'select' as const,
          options: [
            { label: 'H1', value: 1 },
            { label: 'H2', value: 2 },
            { label: 'H3', value: 3 },
            { label: 'H4', value: 4 },
          ],
        },
        color: { type: 'text' as const },
        align: {
          type: 'select' as const,
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
            { label: 'Justify', value: 'justify' },
          ],
        },
        background: {
          type: 'select' as const,
          options: [
            { label: 'None', value: 'transparent' },
            { label: 'Light Gray', value: '#f5f5f5' },
            { label: 'Soft Blue', value: '#e0f7fa' },
            { label: 'Soft Green', value: '#e8f5e9' },
            { label: 'Soft Yellow', value: '#fffde7' },
            { label: 'Soft Pink', value: '#fce4ec' },
            { label: 'Soft Lavender', value: '#f3e5f5' },
          ],
        },
        lineHeight: { type: 'text' as const },
      },
      defaultProps: {
        text: 'Heading',
        level: 1,
        color: '#333',
        align: 'left' as const,
      },
      render: Heading,
    },
    Text: {
      fields: {
        text: { type: 'textarea' as const },
        size: {
          type: 'select' as const,
          options: [
            { label: 'Small (14px)', value: '14px' },
            { label: 'Medium (16px)', value: '16px' },
            { label: 'Large (18px)', value: '18px' },
          ],
        },
        color: { type: 'text' as const },
        align: {
          type: 'select' as const,
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
            { label: 'Justify', value: 'justify' },
          ],
        },
        margin: { type: 'text' as const },
        padding: { type: 'text' as const },
        lineHeight: { type: 'text' as const },
      },
      defaultProps: {
        text: 'This is some sample text. You can edit this content using the Puck editor!',
        size: '16px',
        color: '#555',
        align: 'left' as const,
      },
      render: Text,
    },
    Button: {
      fields: {
        text: { type: 'text' as const },
        variant: {
          type: 'select' as const,
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Success', value: 'success' },
            { label: 'Danger', value: 'danger' },
          ],
        },
        size: {
          type: 'select' as const,
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
      },
      defaultProps: {
        text: 'Click me',
        variant: 'primary' as const,
        size: 'medium' as const,
      },
      render: Button,
    },
    Card: {
      fields: {
        title: { type: 'text' as const },
        description: { type: 'textarea' as const },
        backgroundColor: { type: 'text' as const },
      },
      defaultProps: {
        title: 'Card Title',
        description: 'This is a card component with a title and description. You can customize the background color and content.',
        backgroundColor: '#fff',
      },
      render: Card,
    },
    List: {
      fields: {
        items: { type: 'textarea' as const },
        type: {
          type: 'select' as const,
          options: [
            { label: 'Unordered List', value: 'ul' },
            { label: 'Ordered List', value: 'ol' },
          ],
        },
      },
      defaultProps: {
        items: 'First item\nSecond item\nThird item',
        type: 'ul' as const,
      },
      render: List,
    },
    Divider: {
      fields: {
        color: { type: 'text' as const },
        thickness: {
          type: 'select' as const,
          options: [
            { label: 'Thin (1px)', value: '1px' },
            { label: 'Medium (2px)', value: '2px' },
            { label: 'Thick (3px)', value: '3px' },
          ],
        },
      },
      defaultProps: {
        color: '#ddd',
        thickness: '1px',
      },
      render: Divider,
    },
    Spacer: {
      fields: {
        height: {
          type: 'select' as const,
          options: [
            { label: 'Small (10px)', value: '10px' },
            { label: 'Medium (20px)', value: '20px' },
            { label: 'Large (40px)', value: '40px' },
            { label: 'Extra Large (60px)', value: '60px' },
          ],
        },
      },
      defaultProps: {
        height: '20px',
      },
      render: Spacer,
    },
    Container: {
      fields: {
        backgroundColor: { type: 'text' as const },
        padding: {
          type: 'select' as const,
          options: [
            { label: 'Small (10px)', value: '10px' },
            { label: 'Medium (20px)', value: '20px' },
            { label: 'Large (30px)', value: '30px' },
            { label: 'Extra Large (40px)', value: '40px' },
          ],
        },
        layout: {
          type: 'select' as const,
          options: [
            { label: 'Vertical', value: 'vertical' },
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Grid', value: 'grid' },
            { label: 'Centered', value: 'centered' },
          ],
        },
        gap: {
          type: 'select' as const,
          options: [
            { label: 'Small (8px)', value: '8px' },
            { label: 'Medium (16px)', value: '16px' },
            { label: 'Large (24px)', value: '24px' },
            { label: 'Extra Large (32px)', value: '32px' },
          ],
        },
      },
      defaultProps: {
        backgroundColor: 'transparent',
        padding: '20px',
        layout: 'vertical' as const,
        gap: '16px',
      },
      render: Container,
      acceptsChildren: true,
    },
    FlexContainer: {
      fields: {
        direction: {
          type: 'select' as const,
          options: [
            { label: 'Row', value: 'row' },
            { label: 'Column', value: 'column' },
            { label: 'Row Reverse', value: 'row-reverse' },
            { label: 'Column Reverse', value: 'column-reverse' },
          ],
        },
        justify: {
          type: 'select' as const,
          options: [
            { label: 'Flex Start', value: 'flex-start' },
            { label: 'Center', value: 'center' },
            { label: 'Flex End', value: 'flex-end' },
            { label: 'Space Between', value: 'space-between' },
            { label: 'Space Around', value: 'space-around' },
            { label: 'Space Evenly', value: 'space-evenly' },
          ],
        },
        align: {
          type: 'select' as const,
          options: [
            { label: 'Stretch', value: 'stretch' },
            { label: 'Flex Start', value: 'flex-start' },
            { label: 'Center', value: 'center' },
            { label: 'Flex End', value: 'flex-end' },
            { label: 'Baseline', value: 'baseline' },
          ],
        },
        gap: {
          type: 'select' as const,
          options: [
            { label: 'Small (8px)', value: '8px' },
            { label: 'Medium (16px)', value: '16px' },
            { label: 'Large (24px)', value: '24px' },
            { label: 'Extra Large (32px)', value: '32px' },
          ],
        },
        wrap: {
          type: 'select' as const,
          options: [
            { label: 'No Wrap', value: 'nowrap' },
            { label: 'Wrap', value: 'wrap' },
            { label: 'Wrap Reverse', value: 'wrap-reverse' },
          ],
        },
      },
      defaultProps: {
        direction: 'row' as const,
        justify: 'flex-start' as const,
        align: 'stretch' as const,
        gap: '16px',
        wrap: 'nowrap' as const,
      },
      render: FlexContainer,
      acceptsChildren: true,
    },
    GridContainer: {
      fields: {
        columns: {
          type: 'select' as const,
          options: [
            { label: '1 Column', value: 1 },
            { label: '2 Columns', value: 2 },
            { label: '3 Columns', value: 3 },
            { label: '4 Columns', value: 4 },
            { label: '5 Columns', value: 5 },
            { label: '6 Columns', value: 6 },
          ],
        },
        gap: {
          type: 'select' as const,
          options: [
            { label: 'Small (8px)', value: '8px' },
            { label: 'Medium (16px)', value: '16px' },
            { label: 'Large (24px)', value: '24px' },
            { label: 'Extra Large (32px)', value: '32px' },
          ],
        },
        rowGap: {
          type: 'select' as const,
          options: [
            { label: 'Small (8px)', value: '8px' },
            { label: 'Medium (16px)', value: '16px' },
            { label: 'Large (24px)', value: '24px' },
            { label: 'Extra Large (32px)', value: '32px' },
          ],
        },
      },
      defaultProps: {
        columns: 2,
        gap: '16px',
        rowGap: '16px',
      },
      render: GridContainer,
      zones: { children: ['Text', 'Button', 'Heading', 'Card'] },
    },
    SimpleContainer: {
      fields: {
        backgroundColor: { type: 'text' as const },
        padding: {
          type: 'select' as const,
          options: [
            { label: 'Small (10px)', value: '10px' },
            { label: 'Medium (20px)', value: '20px' },
            { label: 'Large (30px)', value: '30px' },
          ],
        },
      },
      defaultProps: {
        backgroundColor: '#f0f8ff',
        padding: '20px',
      },
      render: SimpleContainer,
      acceptsChildren: true,
    },
    PositionedElement: {
      fields: {
        position: {
          type: 'select' as const,
          options: [
            { label: 'Static', value: 'static' },
            { label: 'Relative', value: 'relative' },
            { label: 'Absolute', value: 'absolute' },
            { label: 'Fixed', value: 'fixed' },
            { label: 'Sticky', value: 'sticky' },
          ],
        },
        top: { type: 'text' as const },
        left: { type: 'text' as const },
        right: { type: 'text' as const },
        bottom: { type: 'text' as const },
        zIndex: { type: 'text' as const },
      },
      defaultProps: {
        position: 'static' as const,
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        zIndex: 'auto',
      },
      render: PositionedElement,
      acceptsChildren: true,
    },
    HeroSection: {
      fields: {
        title: { type: 'text' as const },
        subtitle: { type: 'textarea' as const },
        buttonText: { type: 'text' as const },
        buttonLink: { type: 'text' as const },
        backgroundColor: { type: 'text' as const },
        textColor: {
          type: 'select' as const,
          options: [
            { label: 'White', value: 'white' },
            { label: 'Black', value: 'black' },
            { label: 'Blue', value: '#007bff' },
            { label: 'Green', value: '#28a745' },
          ],
        },
        backgroundImage: { type: 'text' as const },
        height: {
          type: 'select' as const,
          options: [
            { label: 'Small (300px)', value: '300px' },
            { label: 'Medium (400px)', value: '400px' },
            { label: 'Large (500px)', value: '500px' },
            { label: 'Extra Large (600px)', value: '600px' },
          ],
        },
        alignment: {
          type: 'select' as const,
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
      },
      defaultProps: {
        title: 'Welcome to Our Amazing Product',
        subtitle: 'Discover the future of web development with our innovative solutions and cutting-edge technology.',
        buttonText: 'Get Started',
        buttonLink: '#',
        backgroundColor: '#007bff',
        textColor: 'white' as const,
        backgroundImage: '',
        height: '400px' as const,
        alignment: 'center' as const,
      },
      render: HeroSection,
    },
    Slider: {
      fields: {
        slides: { type: 'textarea' as const, label: 'Slide Content (one per line)' },
        autoplay: {
          type: 'radio' as const,
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        autoplaySpeed: {
          type: 'select' as const,
          options: [
            { label: 'Fast (2s)', value: 2000 },
            { label: 'Normal (3s)', value: 3000 },
            { label: 'Slow (5s)', value: 5000 },
            { label: 'Very Slow (8s)', value: 8000 },
          ],
        },
        showDots: {
          type: 'radio' as const,
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        showArrows: {
          type: 'radio' as const,
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        height: {
          type: 'select' as const,
          options: [
            { label: 'Small (300px)', value: '300px' },
            { label: 'Medium (400px)', value: '400px' },
            { label: 'Large (500px)', value: '500px' },
            { label: 'Extra Large (600px)', value: '600px' },
          ],
        },
        backgroundColor: {
          type: 'select' as const,
          options: [
            { label: 'Light Gray', value: '#f8f9fa' },
            { label: 'Blue', value: '#007bff' },
            { label: 'Green', value: '#28a745' },
            { label: 'Purple', value: '#6f42c1' },
            { label: 'Orange', value: '#fd7e14' },
          ],
        },
      },
      defaultProps: {
        slides: 'Welcome to Slide 1\nThis is Slide 2\nAnd here is Slide 3',
        autoplay: true,
        autoplaySpeed: 3000,
        showDots: true,
        showArrows: true,
        height: '400px' as const,
        backgroundColor: '#f8f9fa' as const,
      },
      render: Slider,
    },
    Expander: {
      fields: {
        title: { type: 'text' as const },
        initiallyExpanded: {
          type: 'radio' as const,
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
      },
      defaultProps: {
        title: 'Expandable Section',
        initiallyExpanded: false,
      },
      render: Expander,
    },
    ImageTextSplit: {
      fields: {
        text: { type: 'textarea' as const },
        imageSrc: { type: 'text' as const },
        alt: { type: 'text' as const },
        textAlign: {
          type: 'select' as const,
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
            { label: 'Justify', value: 'justify' },
          ],
        },
        textColor: { type: 'text' as const },
        imageWidth: {
          type: 'select' as const,
          options: [
            { label: '30%', value: '30%' },
            { label: '40%', value: '40%' },
            { label: '50%', value: '50%' },
            { label: '60%', value: '60%' },
          ],
        },
      },
      defaultProps: {
        text: 'This is the text content on the left side.',
        imageSrc: 'https://via.placeholder.com/400x300',
        alt: 'Split Image',
        textAlign: 'left' as const,
        textColor: '#333',
        imageWidth: '50%',
      },
      render: ImageTextSplit,
    },
    Sponsor: {
      fields: {
        sponsors: { type: 'textarea' as const, label: 'Sponsors (one per line)' },
        backgroundColor: { type: 'text' as const },
      },
      defaultProps: {
        sponsors: 'Sponsor 1\nSponsor 2\nSponsor 3',
        backgroundColor: '#f8f9fa',
      },
      render: Sponsor,
    },
    Location: {
      fields: {
        address: { type: 'textarea' as const },
        mapUrl: { type: 'text' as const },
        backgroundColor: { type: 'text' as const },
      },
      defaultProps: {
        address: '123 Event Street, City, Country',
        mapUrl: 'https://via.placeholder.com/400x200',
        backgroundColor: '#f8f9fa',
      },
      render: Location,
    },
    Dates: {
      fields: {
        dateList: { type: 'textarea' as const, label: 'Dates (one per line)' },
        backgroundColor: { type: 'text' as const },
      },
      defaultProps: {
        dateList: '2025-09-03\n2025-09-04\n2025-09-05',
        backgroundColor: '#f8f9fa',
      },
      render: Dates,
    },
    ContactUs: {
      fields: {
        email: { type: 'text' as const },
        phone: { type: 'text' as const },
        messagePlaceholder: { type: 'text' as const },
        backgroundColor: { type: 'text' as const },
      },
      defaultProps: {
        email: 'contact@example.com',
        phone: '+1-234-567-8900',
        messagePlaceholder: 'Your message here...',
        backgroundColor: '#f8f9fa',
      },
      render: ContactUs,
    },
    FilterSearch: {
      fields: {
        placeholder: { type: 'text' as const },
        backgroundColor: { type: 'text' as const },
      },
      defaultProps: {
        placeholder: 'Search programs...',
        backgroundColor: '#f8f9fa',
      },
      render: FilterSearch,
    },
    ProgramList: {
      fields: {
        programs: { type: 'textarea' as const, label: 'Programs' },
        backgroundColor: { type: 'text' as const },
      },
      defaultProps: {
        programs: 'Program 1\nA great event on September 03, 2025\n\nProgram 2\nAnother event on September 04, 2025',
        backgroundColor: '#f8f9fa',
      },
      render: ProgramList,
    },
  },
};

const initialData = {
  content: [],
  root: { props: {} },
};

const App: React.FC = () => {
  return (
    // <div style={canvasStyle}>
    // <div style={{ height: '100vh', backgroundColor: '#106dbeff', padding: '20px', borderRadius: '8px', overflow: 'auto' }}>
      <Puck config={config as any} data={initialData} />
    // </div>
    // </div>
  );
};

export default App;