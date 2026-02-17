import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

interface ITasks {
    id: number;
    title: string;
    isCompleted: boolean;
}

const getAll = async (): Promise<ITasks[] | ApiException> => {
    try {
        const { data } = await Api().get('/tasks');
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error fetching tasks');
    }
};

const getById = async (id: number): Promise<ITasks | ApiException> => {
    try {
        const { data } = await Api().get(`/tasks/${id}`);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error fetching task');
    }
};

const create = async (dataToCreate: Omit<ITasks, 'id'>): Promise<ITasks | ApiException> => {
    try {
        const { data } = await Api().post<any>('/tasks', dataToCreate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error creating task');
    }
};

const updateById = async (id: number, dataToUpdate: ITasks): Promise<ITasks | ApiException> => {
    try {
        const { data } = await Api().put(`/tasks/${id}`, dataToUpdate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error updating task');
    }
 };

const deleteById = async (id: number): Promise<void | ApiException> => {
    try {
        await Api().delete(`/tasks/${id}`);
    } catch (error: any) {
        return new ApiException(error.message || 'Error deleting task');
    }
};

export const TasksService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};