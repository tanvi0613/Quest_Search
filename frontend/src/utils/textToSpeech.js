const speak = (text) => {
    // Stop any ongoing speech
    window.speechSynthesis.cancel();
  
    // Create new speech utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Optional: Customize voice and parameters
    utterance.rate = 1; // Speaking speed
    utterance.pitch = 1; // Voice pitch
  
    // Speak the text
    window.speechSynthesis.speak(utterance);
  };
  
  export default speak;