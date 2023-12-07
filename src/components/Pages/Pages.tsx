import {useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import {useParams} from 'react-router-dom';
import Loader from '../Loader/Loader';

interface Props {
  title: string;
  content: string;
}

const Pages = () => {
  const [content, setContent] = useState<Props>({
    title: '',
    content: '',
  });

  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchUrl =  async () => {
      try {
        const response = await axiosApi.get('/pages/' + params.pageName + '.json');

        setContent(response.data);
      } finally {
        setLoading(false);
      }
    };

    void fetchUrl();
  }, [params.pageName]);

  let contentInfo = (
    <div className="border p-4 mt-3 border-dark rounded-3">
      <h4 className="text-center border-bottom">{content.title}</h4>
      <p className="text-center">{content.content}</p>
    </div>
  );

  if (loading) {
    contentInfo = (
      <Loader />
    )
  }

  return (
    <div>
      {contentInfo}
    </div>
  );
};

export default Pages;