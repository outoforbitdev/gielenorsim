import React, { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface IComponentProps {
    className?: string;
    children?: ReactNode
}
