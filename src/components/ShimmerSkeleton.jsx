import React from 'react';
import Shimmer from './Shimmer';

const ShimmerSkeleton = () => {
    return (
        <div className="shimmer-skeleton-container">
            {/*header  */}
            <div className="shimmer-header">
                {/* cells */}
                <div className="shimmer-cell-header"></div>
                <div className="shimmer-cell-header"></div>
                <div className="shimmer-cell-header"></div>
                <div className="shimmer-cell-header"></div>
            </div>

            {/* rows */}
            <div className="shimmer-row"></div>
            <div className="shimmer-row"></div>
            <div className="shimmer-row"></div>
            <div className="shimmer-row"></div>
            <div className="shimmer-row"></div>
            <div className="shimmer-row"></div>
            <div className="shimmer-row"></div>
            <div className="shimmer-row"></div>
            <div className="shimmer-row"></div>
            <div className="shimmer-row"></div>
            <div className="shimmer-row"></div>
            <div className="shimmer-row"></div>
            <div className="shimmer-row"></div>

            {/* anitated loader */}
            <Shimmer/>
        </div>
    );
};

export default ShimmerSkeleton;