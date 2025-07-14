import { Heart, Gift, Star, Sparkles, Book } from "lucide-react";

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Hearts */}
      <Heart className="absolute top-20 left-10 h-6 w-6 text-bubblegum/40 animate-heart-pulse" />
      <Heart className="absolute top-60 right-20 h-4 w-4 text-bubblegum/30 animate-heart-pulse animate-delay-2" />
      <Heart className="absolute bottom-40 left-1/4 h-5 w-5 text-bubblegum/35 animate-heart-pulse animate-delay-4" />
      
      {/* Floating Gift Boxes */}
      <Gift className="absolute top-40 right-1/3 h-8 w-8 text-tangerine/40 animate-gift-bounce" />
      <Gift className="absolute bottom-20 right-10 h-6 w-6 text-tangerine/30 animate-gift-bounce animate-delay-3" />
      <Gift className="absolute top-80 left-1/3 h-7 w-7 text-tangerine/35 animate-gift-bounce animate-delay-1" />
      
      {/* Floating Stars */}
      <Star className="absolute top-32 right-1/4 h-5 w-5 text-lime/50 animate-sparkle" />
      <Star className="absolute bottom-60 left-20 h-4 w-4 text-lime/40 animate-sparkle animate-delay-2" />
      <Star className="absolute top-72 left-1/2 h-6 w-6 text-lime/45 animate-sparkle animate-delay-4" />
      <Star className="absolute bottom-32 right-1/3 h-5 w-5 text-lime/40 animate-sparkle animate-delay-1" />
      
      {/* Floating Sparkles */}
      <Sparkles className="absolute top-16 left-1/2 h-4 w-4 text-purple/40 animate-float" />
      <Sparkles className="absolute bottom-72 left-10 h-5 w-5 text-purple/35 animate-float animate-delay-3" />
      <Sparkles className="absolute top-96 right-16 h-4 w-4 text-purple/40 animate-float animate-delay-1" />
      
      {/* Floating Books */}
      <Book className="absolute top-52 left-16 h-6 w-6 text-turquoise/40 animate-gentle-sway" />
      <Book className="absolute bottom-48 right-1/4 h-5 w-5 text-turquoise/35 animate-gentle-sway animate-delay-2" />
      <Book className="absolute top-84 right-20 h-7 w-7 text-turquoise/40 animate-gentle-sway animate-delay-4" />
      
      {/* Floating Toys */}
      <div className="absolute top-24 right-1/2 w-6 h-6 bg-tangerine/30 rounded-full animate-float animate-delay-1"></div>
      <div className="absolute bottom-56 left-1/3 w-4 h-4 bg-bubblegum/35 rounded-full animate-float animate-delay-3"></div>
      <div className="absolute top-68 left-8 w-5 h-5 bg-lime/40 rounded-full animate-float"></div>
      <div className="absolute bottom-24 right-1/2 w-7 h-7 bg-purple/30 rounded-full animate-float animate-delay-2"></div>
      
      {/* Large Background Shapes */}
      <div className="absolute top-10 left-4 w-32 h-32 bg-lime/5 rounded-full animate-gentle-sway"></div>
      <div className="absolute bottom-16 right-8 w-40 h-40 bg-bubblegum/5 rounded-full animate-gentle-sway animate-delay-4"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-turquoise/5 rounded-full animate-float animate-delay-2"></div>
      <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-tangerine/5 rounded-full animate-float animate-delay-1"></div>
      <div className="absolute top-1/3 right-12 w-28 h-28 bg-purple/5 rounded-full animate-gentle-sway animate-delay-3"></div>
    </div>
  );
};