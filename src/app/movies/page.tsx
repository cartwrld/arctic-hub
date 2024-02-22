// import { TabNav } from "@/components/TabNav"; // ensure this path is correct
// import { useRouter } from "next/navigation";
import styles from "../page.module.css"; // ensure this path is correct

export default function Movies() {
    // const router = useRouter();
    //
    // // Define the routes for your tabs
    // const tabRoutes = ['/', '/movies', '/tv-shows', '/search'];
    //
    // // Function to handle tab change
    // const handleTabChange = (index: number) => {
    //     // Navigate to the route corresponding to the selected tab index
    //     const route = tabRoutes[index];
    //     router.push(route);
    // };

    return (
        <main className={styles.main}>
            {/*<TabNav onTabChange={handleTabChange} />*/}
            {/* Rest of your page content */}
        </main>
    );
}

