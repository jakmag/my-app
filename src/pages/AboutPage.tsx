import { useState , useEffect } from "react";

interface JiraProject {
    id: string;
    key: string;
    name: string
}


const AboutPage = () => {

    const [projects, setProjects] = useState<JiraProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const email = import.meta.env.VITE_JIRA_EMAIL;
        const token = import.meta.env.VITE_JIRA_TOKEN;

        const credentials = `${email}:${token}`;
            // Base64 encode them using the browser's btoa() function
        const encodedToken = btoa(credentials);

        const fetchSpaces = async () => {

            try {
                
                const response = await fetch('/jira-api/rest/api/3/project', {
                    headers: {
                        'Authorization': `Basic ${encodedToken}`,
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();

                setProjects(data);
                
                
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
            } catch (error: any) {
                setError(error.message)                
            } finally {
                setLoading(false)
            }
            
           
        }

         fetchSpaces();

    },[]);


    return (
        <div>
            <h1>About Page</h1>
            {loading && <p>Loading Jira Spaces</p>}
            {error && <p>Error while loading Jira Spaces</p>}
            <ul>
                {projects.map(project => {
                    return <li key={project.id}>{project.key} : {project.name}</li>
                })}
            </ul>
        </div>
    )
}

export default AboutPage;