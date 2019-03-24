import pdfcrowd
import sys

try:
    # create the API client instance
    client = pdfcrowd.HtmlToImageClient('temp_user', '1ce1b6dfd4b0d0c7f3d5b8acce183007')

    # configure the conversion
    client.setOutputFormat('png')

    # run the conversion and write the result to a file
    client.convertFileToFile('output/image.html', 'MyLayout.png')
except pdfcrowd.Error as why:
    # report the error
    sys.stderr.write('Pdfcrowd Error: {}\n'.format(why))

    # handle the exception here or rethrow and handle it at a higher level
    raise