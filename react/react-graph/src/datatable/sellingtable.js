import React from 'react'
import Table from 'react-bootstrap/Table';

export default function Sellingtable() {
    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Preview</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Sold</th>
                        <th>Revenue</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-primary'>
                            <img src="images/product-1.JPG" alt="shoe" width={'61px'} />
                        </td>
                        <td>Sneakers</td>
                        <td>$65</td>
                        <td className='text-success'>124</td>
                        <td className='text-success'>$5,256</td>

                    </tr>
                    <tr>
                        <td className='text-primary'>
                            <img src="images/product-2.JPG" alt="shoe" width={'61px'} />
                        </td>
                        <td>Apple watch</td>
                        <td>$100</td>
                        <td className='text-success'>98</td>
                        <td>$4,508</td>

                    </tr>
                    <tr>
                        <td className='text-primary'>
                            <img src="images/product-3.JPG" alt="shoe" width={'61px'} />
                        </td>
                        <td>Body spray</td>
                        <td>$147</td>
                        <td className='text-success'>74</td>
                        <td className='text-success'>$4,366</td>
                    </tr>

                    <tr>
                        <td className='text-primary'>
                            <img src="images/product-4.JPG" alt="shoe" width={'61px'} />
                        </td>
                        <td>Eyes shade</td>
                        <td>$67</td>
                        <td className='text-success'>74</td>
                        <td className='text-success'>$2,016</td>
                    </tr>

                    <tr>
                        <td className='text-primary'>
                            <img src="images/product-5.JPG" alt="shoe" width={'61px'} />
                        </td>
                        <td>Airpod</td>
                        <td>$97</td>
                        <td className='text-success'>41</td>
                        <td className='text-success'>$3,239</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
