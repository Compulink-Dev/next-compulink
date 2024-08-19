import { motion } from 'framer-motion';

export default function Vacancy() {
    return (
        <div className="">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1>Vacancies</h1>
                <p>We are hiring! Check out our open positions.</p>
            </motion.div>
        </div>
    );
}
