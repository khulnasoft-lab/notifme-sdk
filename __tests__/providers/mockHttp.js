/* global jest, test */
import https from 'https'
import EventEmitter from 'events'

const mockHttp = jest.fn()
https.request = mockHttp

export default mockHttp

export function mockResponse (statusCode: number, body: string) {
  const mockRequest = new EventEmitter()
  mockRequest.write = () => {}
  mockRequest.end = () => mockRequest.emit('response', {
    statusCode,
    pipe: () => body
  })
  https.request.mockReturnValue(mockRequest)
}

test('not a test', () => {})
