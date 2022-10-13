import React from 'react';
// import { Component } from 'react';
import { toast } from 'react-toastify';
import { ImageGalleryItem } from './ImageGalleryItem';
import { LoadMore } from './LoadMore';
import { getApi } from '../utils/serviceApi';
import { Loader } from './Loader';
import { useState } from 'react';
import { useEffect } from 'react';

export function ImageGallery({ pictureName }) {
  const [dataGallery, setDataGallery] = useState(null);
  const [page, setPage] = useState(1);
  const [visibleLoadMore, setVisibleLoadMore] = useState(false);
  const [visibleLoader, setVisibleLoader] = useState(false);

  useEffect(() => {
    if (!pictureName) {
      return;
    }

    setPage(1);
    setDataGallery(null);
    setVisibleLoadMore(false);
    setVisibleLoader(true);

    getApi(page, pictureName).then(response => {
      setVisibleLoader(false);
      if (response.hits.length === 0) {
        toast.error('No such pictures!');
        return;
      }
      if (response.hits.length > 11) {
        setDataGallery(response.hits);
        setVisibleLoadMore(true);
      } else {
        setDataGallery(response.hits);
        setVisibleLoadMore(false);
      }
    });
  }, [pictureName]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    setVisibleLoader(true);
    getApi(page, pictureName).then(response => {
      setVisibleLoader(false);
      if (response.hits.length === 0) {
        setVisibleLoadMore(false);
        setDataGallery([]);
        toast.error('No such pictures!');
        return;
      }
      if (response.hits.length > 11) {
        setDataGallery([...dataGallery, ...response.hits]);
        setVisibleLoadMore(true);
      } else {
        setDataGallery([...dataGallery, ...response.hits]);
        setVisibleLoadMore(false);
      }
    });
  }, [page]);
  const loadMoreClick = () => {
    setPage(page + 1);
  };
  return (
    <>
      <Loader visible={visibleLoader} />
      <ul className="ImageGallery">
        {dataGallery &&
          dataGallery.map(picture => {
            return <ImageGalleryItem data={picture} key={picture.id} />;
          })}
      </ul>
      {visibleLoadMore && <LoadMore onClickLoadMore={loadMoreClick} />}
    </>
  );
}

// export class ImageGallery extends Component {
//   state = {
//     dataGallery: null,
//     page: 1,
//     visibleLoadMore: false,
//     visibleLoader: false,
//   };
//   async componentDidUpdate(prevProps, prevState) {
//     const prevStatePage = prevState.page;
//     const nextStatePage = this.state.page;
//     const prevName = prevProps.pictureName;
//     const nextName = this.props.pictureName;
//     if (prevName !== nextName) {
//       this.setState({ page: 1, dataGallery: [], visibleLoadMore: false });
//     }

//   if (prevName !== nextName || prevStatePage !== nextStatePage) {
//     try {
//       this.setState({ visibleLoader: true });
//       const response = await getApi(nextStatePage, nextName);
//       this.setState({ visibleLoader: false });
//       if (response.hits.length === 0) {
//         toast.error('No such pictures!');
//         this.setState({ visibleLoadMore: false });
//       }
//       response.hits.length > 11
//         ? this.setState({ visibleLoadMore: true })
//         : this.setState({ visibleLoadMore: false });

//       if (!this.state.dataGallery) {
//         return this.setState({ dataGallery: response.hits });
//       }
//       this.setState(prevState => {
//         return { dataGallery: [...prevState.dataGallery, ...response.hits] };
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }
// loadMoreClick = () => {
//   this.setState(prevState => ({
//     page: prevState.page + 1,
//   }));
// };
//   render() {
//     return (
//       <>
//         <Loader visible={this.state.visibleLoader} />
//         <ul className="ImageGallery">
//           {this.state.dataGallery &&
//             this.state.dataGallery.map(picture => {
//               return <ImageGalleryItem data={picture} key={picture.id} />;
//             })}
//         </ul>
//         {this.state.visibleLoadMore && (
//           <LoadMore onClickLoadMore={this.loadMoreClick} />
//         )}
//       </>
//     );
//   }
// }
