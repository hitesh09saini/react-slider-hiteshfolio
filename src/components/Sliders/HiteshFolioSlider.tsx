
import * as React from 'react';
import 'hiteshfolio.slider.css'
interface HiteshFolioSliderProps {
    images: string[];
}

const HiteshFolioSlider: React.FC<HiteshFolioSliderProps> = ({ images }) => {


    const sliderRef = React.useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    const cloneImages = [...images, ...images, ...images];

    React.useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleScroll = () => {
            const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

            setCanScrollLeft(slider.scrollLeft > 0);
            setCanScrollRight(slider.scrollLeft < maxScrollLeft);

            if (slider.scrollLeft === 0) {
                slider.style.scrollBehavior = 'auto';
                slider.scrollLeft = maxScrollLeft / 3;
                slider.style.scrollBehavior = 'smooth';
            } else if (slider.scrollLeft >= maxScrollLeft) {
                slider.style.scrollBehavior = 'auto';
                slider.scrollLeft = maxScrollLeft / 3;
                slider.style.scrollBehavior = 'smooth';
            }
        };

        slider.addEventListener('scroll', handleScroll);
        slider.scrollLeft = slider.scrollWidth / 3; // Start from the middle of the cloned list

        handleScroll(); // Initial check to show/hide buttons

        const autoScroll = () => {
            slider.scrollBy({
                left: slider.clientWidth,
                behavior: 'smooth'
            });
        };

        const intervalId = setInterval(autoScroll, 3000); // Auto-scroll every 3 seconds

        return () => {
            slider.removeEventListener('scroll', handleScroll);
            clearInterval(intervalId);
        };
    }, []);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -sliderRef.current.clientWidth,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: sliderRef.current.clientWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative">
            <div
                ref={sliderRef}
                className="flex w-full h-[500px] overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar"
                style={{ scrollBehavior: 'smooth' }}
            >
                {cloneImages.map((item, index) => (
                    <div key={index} className='relative w-full h-full'>
                        <img
                            className="w-full h-full flex-shrink-0 snap-start"
                            src={item}
                            alt={`Slide ${index}`}
                        />
                    </div>
                ))}
            </div>
            {canScrollLeft && (
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                    onClick={scrollLeft}
                >
                    &lt;
                </button>
            )}
            {canScrollRight && (
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                    onClick={scrollRight}
                >
                    &gt;
                </button>
            )}
        </div>
    );
};

export default HiteshFolioSlider;
