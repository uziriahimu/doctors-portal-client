import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConformationModal from '../../Shared/ConformationModal';
import IsLoading from '../../Shared/IsLoading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState()

    const closeModal = () => {
        setDeletingDoctor(null)
    }


    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: 'doctors',
        queryFn: async () => {
            try {
                const res = await fetch('https://doctors-portal-server-red.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = res.json()
                return data
            }
            catch (err) {
                console.log(err);

            }
        }
    })

    const handleDelete = doctor => {
        fetch(`https://doctors-portal-server-red.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} deleted successfully`)
                }

            })
    }

    if (isLoading) {
        return <IsLoading></IsLoading>
    }

    return (
        <div>
            <h2 className="text-3xl">Manage Doctors: {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>

                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="conformation-modal" className="btn">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConformationModal
                    title={'Are you sure you want to delete?'}
                    message={`if you delete ${deletingDoctor.name}.it can not be undone`}
                    successAction={handleDelete}
                    successButtonName='Delete'
                    modalData={deletingDoctor}
                    closeModal={closeModal}
                ></ConformationModal>
            }

        </div>
    );
};

export default ManageDoctors;