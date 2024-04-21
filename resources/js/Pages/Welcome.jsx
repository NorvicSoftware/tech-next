import { Link, Head } from "@inertiajs/react";
import Career from "./Users/Career";
import Checkbox from "@/Components/Checkbox";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <Career />


                <footer class="text-gray-600 text-center mt-8">
                    <p>&copy; 2024 TechNex</p>
                </footer>
          
        </>
    );
}