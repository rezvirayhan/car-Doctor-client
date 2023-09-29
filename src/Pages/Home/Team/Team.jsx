import React from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    return (
        <div>
            <div className='space-y-4 text-center'>
                <h2 className='text-orange-600 text-3xl font-medium'>Team</h2>
                <h3 className='text-5xl font-semibold'>Meet Our Team</h3>
                <p className='text-xl'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='mt-4'>
                <TeamCard></TeamCard>
            </div>
        </div>
    );
};

export default Team;