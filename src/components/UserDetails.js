import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserDetails() {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const loadTimeStart = Date.now();
        const minLoadingTime = 1000; // 1 second minimum

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {
                const elapsedTime = Date.now() - loadTimeStart;
                const remainingTime = minLoadingTime - elapsedTime;

                if (remainingTime > 0) {
                    setTimeout(() => {
                        setUser(data);
                        setLoading(false);
                    }, remainingTime);
                } else {
                    setUser(data);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <Link to="/">Back to User List</Link>
        </div>
    );
}
