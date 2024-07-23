import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const ShimmerSkeleton = () => {
    return (
        <div className="skeleton-container">
            {/*header  */}
            <div className="skeleton-header">
                {/* cells */}
                {Array.from({ length: 4 }).map((_, idx) => (<SkeletonElement key={idx} type='skeleton-cell-header'/>))}
            </div>

            {/* rows */}
            {Array.from({ length: 12 }).map((_, idx) => (<SkeletonElement key={idx} type='skeleton-row'/>))}

            {/* animated loader */}
            <Shimmer/>
        </div>
    );
};

export default ShimmerSkeleton;