import { comboDto, ComboForUpdate } from '../models/combo';
import axios from 'axios';

const API_URL = 'https://localhost:7104/api/v1/Combo';

export const getCombos = async (): Promise<comboDto[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data.items.map((item: any) => ({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      discount: item.discount,
      isDeleted: item.isDeleted,
      description: item.description
    }));
  } catch (error) {
    throw new Error('Failed to fetch combos');
  }
};


// Tạo mới combo
const createCombo = async (combo: comboDto): Promise<comboDto> => {
  try {
    const response = await axios.post(API_URL, combo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating combo:', error);
    throw new Error('Failed to create combo');
  }
};

// Lấy thông tin combo theo ID
const getComboById = async (id: string): Promise<comboDto> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching combo:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};

const updateCombo = async (combo: ComboForUpdate): Promise<void> => {
  try {
    await axios.put(`${API_URL}/${combo.id}`, combo);
  } catch (error) {
    console.error('Error updating combo:', error);
    throw new Error('Failed to update combo');
  }
};

const updateComboIsDeleted = async (id: string, isDeleted: boolean): Promise<void> => {
  try {
    const combo = await getComboById(id);
    const updatedCombo: ComboForUpdate = {
      ...combo,
      isDeleted: isDeleted,
    };
    await updateCombo(updatedCombo);
  } catch (error) {
    console.error('Error updating combo status:', error);
    throw error;
  }
};

const ComboService = {
  getCombos,
  createCombo,
  getComboById,
  updateCombo,
  updateComboIsDeleted,
};



export default ComboService;
