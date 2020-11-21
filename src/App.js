import {motion} from 'framer-motion';
import './App.css';

function App() {
  return (
    <motion.div 
    initial={{scale: 0}}
    animate={{rotate: 360, scale: 1}}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20,
      duration: 3
    }}>
    <h1>Blackout's React Framer Motion Practice</h1>
    </motion.div>
  
  );
}

export default App;
