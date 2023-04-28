import React, { useEffect } from 'react';
import Slide from './Slide';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSlides, openSlideEdit, saveSlidesOrder, sliderReorder } from '../../../store/slider';
import { Reorder } from 'framer-motion';
import { Button, Dialog, DialogContent } from '@mui/material';
import SlideEditForm from './SlideEditForm/SlideEditForm';
const Slider = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSlides());
    }, []);
    const { slides, saveOrderButton, slideEditModal } = useSelector(state => state.sliderStore);
    console.log(slides);
    const reOrder = (newOrder) => {
         dispatch(sliderReorder(newOrder));
    };
    return (
        <div>
            <h2>Slider</h2>
            <h2><Button onClick={() => dispatch(openSlideEdit())}>+ Add new slide</Button></h2>
            <Dialog open={slideEditModal}
                    maxWidth={'xs'}>
                <DialogContent style={{borderRadius: 0}}>
                    <SlideEditForm/>
                </DialogContent>

            </Dialog>
            <h2> {saveOrderButton &&
                <Button onClick={() => dispatch(saveSlidesOrder(slides))} color={'success'}>
                    Save order</Button>}</h2>
            <Reorder.Group onReorder={(newOrder) => reOrder(newOrder)} values={slides} as={'ul'}>
                {slides &&
                    slides.map(slide => <Reorder.Item value={slide} key={slide._id} whileDrag={{ scale: 1.03 }}>
                        <Slide slide={slide}/>
                    </Reorder.Item>)
                }
            </Reorder.Group>
        </div>
    );
};

export default Slider;